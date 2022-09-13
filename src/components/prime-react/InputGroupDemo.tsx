
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

const InputGroupDemo = () => {
    const [checked1, setChecked1] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);
    const [radioValue1, setRadioValue1] = useState<string>('');
    const [radioValue2, setRadioValue2] = useState<string>('');

    return (
        <div>
            <div className="card">
                <h5>Addons</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">$</span>
                            <InputNumber placeholder="Price" />
                            <span className="p-inputgroup-addon">.00</span>
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">www</span>
                            <InputText placeholder="Website" />
                        </div>
                    </div>
                </div>

                <h5>Multiple Addons</h5>
                <div className="grid">
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-clock"></i>
                            </span>
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-star-fill"></i>
                            </span>
                            <InputNumber placeholder="Price" />
                            <span className="p-inputgroup-addon">$</span>
                            <span className="p-inputgroup-addon">.00</span>
                        </div>
                    </div>
                </div>

                <h5>Button Addons</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <Button label="Search"/>
                            <InputText placeholder="Keyword"/>
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <InputText placeholder="Keyword"/>
                            <Button icon="pi pi-search" className="p-button-warning"/>
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <Button icon="pi pi-check" className="p-button-success"/>
                            <InputText placeholder="Vote"/>
                            <Button icon="pi pi-times" className="p-button-danger"/>
                        </div>
                    </div>
                </div>

                <h5>Checkbox and RadioButton</h5>
                <div className="grid p-fluid">
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked1} onChange={(e) => setChecked1(!checked1)} />
                            </span>
                            <InputText placeholder="Username"/>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-inputgroup">
                            <InputText placeholder="Price"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb1" value="rb1" checked={radioValue1 === 'rb1'} onChange={(e) => setRadioValue1(e.value)} />
                            </span>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked2} onChange={(e) => setChecked2(!checked2)} />
                            </span>
                            <InputText placeholder="Website"/>
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb2" value="rb2" checked={radioValue2 === 'rb2'} onChange={(e) => setRadioValue2(e.value)} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputGroupDemo;
