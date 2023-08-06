import './gallery.css'
import { useHouseList } from '../../utils/hookJson';
import Card from '../card/card';

export default function Gallery() {

    const {data, isLoading, error} = useHouseList();

    return (
        <div className='gallery'>
            { isLoading && <div>En cours de traitement...</div>}
            { error && <div>{error}</div>}
            { data && 
                data.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))
            }
        </div>
    );
}