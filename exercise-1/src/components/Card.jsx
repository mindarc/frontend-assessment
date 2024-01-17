export function Card({ image, title, description, buttonStyle, buttonLabel, buttonUrl }) {
  return (
    <div className="card h-100 text-center">
      {image && <img src={image} className="card-img-top rounded" alt={title} />}
      <div className="card-body h-100 d-flex flex-column align-items-center pb-0">
        {title && <h5 className="card-title">{title}</h5>}
        {description && <p className="card-text">{description}</p>}
        {buttonLabel && (
          <a href={buttonUrl} className={`btn btn-${buttonStyle} mt-auto`}>
            {buttonLabel}
          </a>
        )}
      </div>
    </div>
  )
}
