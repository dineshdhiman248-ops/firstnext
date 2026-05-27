"use client";
 

function ServiceBox({Servicedata}:any) {
  return (
 
  <div className="container mx-auto px-5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {Servicedata.map((service: any) => (
      <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 group">
        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
          🚀
        </div>
        <h3 className="text-2xl font-bold mb-3">
          {service.title}
        </h3>

        <p className="text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>
 ))}
    
    </div>
  </div>

  );
}
 
export default ServiceBox;