import React, { useState } from 'react';
import './Paginapagamento.css';
import logo from '../../image/logoatu.png'





const Paginapagamento = () => {
    const [paymentMethod, setPaymentMethod] = useState('pix');
    const [cardDetails, setCardDetails] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
    });

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Detalhes do pagamento:', paymentMethod === 'pix' ? 'Pix' : cardDetails);
    };

    return (
        <div className="Paginapagamento">
                  <img id='logopa' src={logo} alt='' />
            <form onSubmit={handleSubmit}>
                <div className="formapagamento">
                    <label>
                        <input
                        id='pagpix'
                            type="radio"
                            name="formapagamento"
                            value="pix"
                            checked={paymentMethod === 'pix'}
                            onChange={() => handlePaymentMethodChange('pix')}
                        />
                        Pix
                    </label>
                    <label>
                        <input
                        id='pagcartao'
                            type="radio"
                            name="formapagamento"
                            value="cartao"
                            checked={paymentMethod === 'cartao'}
                            onChange={() => handlePaymentMethodChange('cartao')}
                        />
                        Cartão de Crédito
                    </label>
                </div>
                {paymentMethod === 'cartao' && (
                    <div className="card-details">
                        <div>
                            <label>Nome no Cartão</label>
                            <input
                                type="text"
                                name="name"
                                value={cardDetails.name}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>Número do Cartão</label>
                            <input
                                type="text"
                                name="number"
                                value={cardDetails.number}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>Data de Validade</label>
                            <input
                                type="text"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                        <div>
                            <label>CVC</label>
                            <input
                                type="text"
                                name="cvc"
                                value={cardDetails.cvc}
                                onChange={handleCardDetailsChange}
                            />
                        </div>
                    </div>
                )}


                <button id='botpagamento' type="submit">Pagar</button>

                <label>Cadastrar CEP</label>

                        <input
                        id='pagpix'
                            type="radio"
                            name="formapagamento"
                            value="pix"
                        />
            </form>
            
        </div>
    );
};

export default Paginapagamento;

