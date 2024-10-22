
const AdvertActions = ({ advert, onUpdate }) => {
    const handleApprove = async () => {
      // Onaylama işlemi
      await fetch(`/api/adverts/${advert.id}/approve`, { method: 'POST' });
      onUpdate();
    };
  
    const handleEdit = async () => {
      // Düzenleme işlemi (detayları yöneticiye özel bir formda açılabilir)
      console.log('Düzenleme işlemi tetiklendi.');
    };
  
    const handleDelete = async () => {
      // Silme işlemi
      await fetch(`/api/adverts/${advert.id}`, { method: 'DELETE' });
      onUpdate();
    };
  
    return (
      <div>
        <button onClick={handleApprove}>Onayla</button>
        <button onClick={handleEdit}>Düzenle</button>
        <button onClick={handleDelete}>Sil</button>
      </div>
    );
  };
  
  export default AdvertActions;
  