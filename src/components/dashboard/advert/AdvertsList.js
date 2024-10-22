import { useEffect, useState } from 'react';
import AdvertActions from './AdvertActions';
//Bu sınıf Advert.Page e import edilmeli **/!!!!!!!!!
const AdvertsList = () => {
    const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    // API'den ilanları çek (örnek bir veri çekimi)
    const fetchAdverts = async () => {
      const response = await fetch('/api/adverts');
      const data = await response.json();
      setAdverts(data);
    };
    
    fetchAdverts();
  }, []);

  const updateAdverts = () => {
    fetchAdverts(); // İşlem sonrası ilanları güncelle
  };

  return (
    <div>
      <h2>Tüm İlanlar</h2>
      <ul>
        {adverts.map(advert => (
          <li key={advert.id}>
            <h3>{advert.title}</h3>
            <p>Durum: {advert.status}</p>
            <AdvertActions advert={advert} onUpdate={updateAdverts} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertsList;

