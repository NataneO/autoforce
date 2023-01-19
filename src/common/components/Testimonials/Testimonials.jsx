
import './style.scss'
import GridWrapper from '../../grid/grid';

const testimonials = [
    { name: 'a', testimonial: '', position: '', company: '', img: '' },
    { name: 'a', testimonial: '', position: '', company: '', img: '' },
    { name: 'a', testimonial: '', position: '', company: '', img: '' },
    { name: 'a', testimonial: '', position: '', company: '', img: '' },
    { name: 'a', testimonial: '', position: '', company: '', img: '' }
]

export default function Testimonials() {
    return (
        <div className="TestimonialsComponent">
            <GridWrapper columns={2} rows={1} columnSizer={[5,7]}>
                <div>
                    <h4>O QUE DIZEM SOBRE NÓS?</h4>
                </div>
                <div></div>
            </GridWrapper>
        </div>
    )
}