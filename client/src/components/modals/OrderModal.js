import {Modal} from 'antd';


const OrderModal = ({session, orderedBy, showModal, setShowModal}) => {
    return (
        <Modal visible={showModal} title="Order payment info"
        onCancel={() => setShowModal(!showModal)}
        >
           
            <p>Payment intent: <b> {session.payment_intent} </b></p>
            <p>Payment status: <b> {session.payment_status} </b></p>
            <p>Amount total: <b>{session.currency.toUpperCase()} {session.amount_total / 100} </b></p>
            <p>Stripe customer: <b> {session.customer} </b></p>
            <p>Customer : <b> {orderedBy.name} </b></p>
            <p className='text-center'>********------------*********</p>
        </Modal>
    )
}


export default OrderModal;