import React from 'react'

const ScheduleSection = () => {
  /* Lógica de JavaScript */
  
  return (
<div className="bg-gray-900 text-white py-10 px-5 md:px-20">
    <h2 className="text-3xl font-bold text-center mb-8">Cronograma de Actividades</h2>
      
    <div className="flex justify-center mb-10">
      <img 
        src="/images/cronograma.png" 
        alt="Cronograma" 
        className="w-full max-w-2xl rounded-lg shadow-lg"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {games.map((game, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
          <img 
            src={game.image} 
            alt={game.name} 
            className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
          <h3 className="text-xl font-semibold text-center">{game.name}</h3>
        </div>
      ))}
    </div>
</div>
  )
}

export default ScheduleSection