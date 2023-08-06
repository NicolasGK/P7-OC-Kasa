import './banner.css'

export default function Banner(props) {

	return (
		<div className="banner">
            <h1 className="banner_title">{props.title}</h1>
            <img src={props.src} alt='banniere_kasa' className='banner_img' />
        </div>
	)
}