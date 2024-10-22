const logChange = async (advertId, action) => {
    // Log verisini API'ye gönder
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        advertId: advertId,
        action: action,
        date: new Date().toISOString(),
      }),
    });
  };
  
  // components/AdvertActions.js içinde loglama işlemi ekleme
  const handleApprove = async () => {
    await fetch(`/api/adverts/${advert.id}/approve`, { method: 'POST' });
    await logChange(advert.id, 'approved');  // Loglama işlemi
    onUpdate();
  };
  
  const handleDelete = async () => {
    await fetch(`/api/adverts/${advert.id}`, { method: 'DELETE' });
    await logChange(advert.id, 'deleted');  // Loglama işlemi
    onUpdate();
  };