import React from 'react';
import { Modal} from 'react-bootstrap';
import Input from '../../../../Reusables/Input';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../Reusables/Button';
import { SetNewProject } from '../../../../../Redux/Actions/Projects';
import { changeStatus } from '../../../../../Redux/Actions/Modals';

export default function AddNewHotel(){
    const dispatch = useDispatch();
    const show = useSelector(state => state.modalStatus.newHotelOpen)
    const customer = useSelector(state => state.clients.clientList)
    const {register, errors, handleSubmit, reset, control } = useForm();
    const onSubmit = (data) => {
        dispatch(SetNewProject(data));
    }

    return(
        <>
        <Modal
            show={show}
            onHide={() => dispatch(changeStatus('hotel', false))}
            size="xl"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title text-uppercase">
                New hotel
            </Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <div className="container">
                    <div className="row">
                            <div className="col-sm-6">
                                <h5>Name *</h5>
                                <Input 
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.name?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>Address *</h5>
                                <Input 
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.address?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>City *</h5>
                                <Input 
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.city?.message} />
                            </div>

                            <div className="col-sm-6">
                                <h5>State *</h5>
                                <Input 
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    constant={register}
                                    required={true}
                                    messageError={errors?.state?.message} />
                            </div>
                        </div>

                        <div className="col-4 mx-auto">
                            <Button
                            type="submit"
                            text="Save" />
                        </div>
                </div>   
            </form> 
        </Modal.Body>
      </Modal>
    </>
    )
}
