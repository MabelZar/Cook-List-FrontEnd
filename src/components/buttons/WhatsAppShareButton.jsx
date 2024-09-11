import React from "react";

function WhatsAppShareButton({ items }) {
  const message = items
    .map(
      (item) =>
        `- ${item.ingredientName} (Cantidad: ${item.quantity} ${item.measurementUnitSymbol})`
    ) 
    .join("\n"); 

  const shareMessage = encodeURIComponent(message); 

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${shareMessage}`;
    window.open(url, "_blank"); 
  };

  return (
    <>
      <button
        onClick={handleWhatsAppShare}
        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-6 h-6"
        />
        Compartir 
      </button>
    </>
  );
}

export default WhatsAppShareButton;
