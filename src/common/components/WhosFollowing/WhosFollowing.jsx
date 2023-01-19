import './style.scss'
import Supporters from './components/Supporters/Supporters';
import Integrations from './components/Integrations/Integrations';


export default function WhosFollowing() {
    return (
        <div className="WhosFollowingComponent">
             
        
            <Supporters/>
            <Integrations/>
        </div>

    )
}