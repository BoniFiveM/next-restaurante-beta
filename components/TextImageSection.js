// components/TextImageSection.js
export function TextImageSection({ title, text, imgSrc, imgAlt, reverse = false }) {
    return (
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between p-8 bg-gray-50`}>
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{text}</p>
        </div>
        <div className="w-1/2">
          <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    );
  }
  