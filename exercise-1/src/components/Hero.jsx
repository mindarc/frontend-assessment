export function Hero({ desktopImage, mobileImage, title, description, className }) {
  return (
    <div className={`hero ${className}`}>
      <div className="hero__image">
        <img src={desktopImage} alt={title} className="d-none d-md-block" />
        <img src={mobileImage} alt={title} className="d-md-none" />
      </div>
      <div className="hero__description">
        <div className="hero__description-inner">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
