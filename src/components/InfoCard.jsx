import React from 'react';


const InfoCard = ({ title, description, subtitle, img, imgAlt, linkUrl, linkname, row1, row2, row3, row4 }) => {
  return (
    <div className="flex bg-base-300 shadow-xl rounded-lg p-4 mb-6 text-left border-1 border-black AH-Expand">
      <div className="w-full justify-left">

        <h2 className="text-xl font-bold text-primary mb-0">{title}</h2>
        <h6 className="text-zinc-500">{subtitle}</h6>
        <h3 className="text-xl text-base-content">{description}</h3>
        <img src={img} alt={imgAlt} />
        {row1 && (<div className=' TransparentUI mt-3 w-9/10 p-2 rounded-sm'>{row1}</div>)}
        {row2 && (<div className=' TransparentUI mt-3 w-9/10 p-2 rounded-sm'>{row2}</div>)}
        {row3 && (<div className=' TransparentUI mt-3 w-9/10 p-2 rounded-sm'>{row3}</div>)}
        {row4 && (<div className=' TransparentUI mt-3 w-9/10 p-2 rounded-sm'>{row4}</div>)}

        {linkUrl && (
          <a href={linkUrl} className="btn btn-secondary btn-sm mt-4" target="_blank" rel="noopener noreferrer">
            {linkname}
          </a>
        )}

      </div>
    </div>
  );
};

export default InfoCard;