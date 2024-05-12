import {createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect} from 'react';
import {TutorType} from "../redux/slices/tutor.ts";
import axios from "../axios.ts";

interface TutorContextType {
    filteredTutors: TutorType[];
    setFilteredTutors: Dispatch<SetStateAction<TutorType[]>>;
}

const TutorContext = createContext<TutorContextType>({
    filteredTutors: [],
    setFilteredTutors: () => {}
});

export const TutorProvider = ({ children }: { children: ReactNode }) => {
    const [filteredTutors, setFilteredTutors] = useState<TutorType[]>([]);
    useEffect(() => {
        const fetchTutorsData = async () => {
            try {
                const response = await axios.get('/tutors'); // Запрос данных о репетиторах с бэка
                setFilteredTutors(response.data); // Установка полученных данных в контекст
                console.log(filteredTutors)
            } catch (error) {
                console.error('Failed to fetch tutors data:', error);
            }
        };

        fetchTutorsData(); // Вызов функции для получения данных о репетиторах
    }, []);

    return (
        <TutorContext.Provider value={{ filteredTutors, setFilteredTutors }}>
            {children}
        </TutorContext.Provider>
    );
};

export const useTutorContext = () => useContext(TutorContext);
