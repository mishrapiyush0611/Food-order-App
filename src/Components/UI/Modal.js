import React,{Fragment} from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'
const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onCloseCart}>

        </div>
    )
}
const ModalOverlay=(props)=>{
    return(
    <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>);
    }
    const PortalElement=document.getElementById("Overlays");
const Modal=(props)=>{
    
return(    
<Fragment>
{ReactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart}></Backdrop>,PortalElement)}
{ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
</Fragment>
)
}
export default Modal;