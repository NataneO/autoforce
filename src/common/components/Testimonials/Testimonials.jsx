import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <GridWrapper columns={2} rows={1}>
                <div>
                    <h4>O QUE DIZEM SOBRE NÓS?</h4>
                </div>
                <div></div>
            </GridWrapper>
        </div>
    )
}