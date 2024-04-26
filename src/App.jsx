import { useState } from 'react';
import Button from './components/UI/Button/Button';
import SearchSvg from './components/UI/Icons/Search/SearchSvg';
import Modal from './components/UI/Modal/Modal';
import Input from './components/UI/Input/Input';

export default function App() {
    const [modalActive, setModalActive] = useState(false);
    const [searchText, setSearchText] = useState('');

    return (
        <div className="App">
            <Button classes="search" onClick={() => setModalActive(true)}>
                <SearchSvg />
            </Button>
            <Modal isActive={modalActive} setActive={setModalActive}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores molestiae corrupti rerum? Non veritatis, magni
                    nesciunt fugiat adipisci blanditiis mollitia!
                </p>
            </Modal>
            <div>
                <Input
                    type="search"
                    placeholder="Введите логин пользователя"
                    name="search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}