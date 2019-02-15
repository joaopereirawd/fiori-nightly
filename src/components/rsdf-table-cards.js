import React from 'react';
import VisaImg from '../../src/img/visa.svg';


const rsdf_table = (props) => {
    return (
        <div className="creditcard-table-wrapper">
            <table className="creditcard-table fd-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="credit-card-row" aria-label="Image label">
                                <span className="credit-card-img">
                                    <img src={VisaImg}></img>
                                </span>
                                <div className="credit-card-info">
                                    <span className="cname">Visa</span>
                                    <span className="clabel">Crédit...   5234</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="credit-card-row" aria-label="Image label">
                                <span className="credit-card-img">
                                    <img src={VisaImg}></img>
                                </span>
                                <div className="credit-card-info">
                                    <span className="cname">Visa</span>
                                    <span className="clabel">Crédit...   5234</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="credit-card-row" aria-label="Image label">
                                <span className="credit-card-img">
                                    <img src={VisaImg}></img>
                                </span>
                                <div className="credit-card-info">
                                    <span className="cname">Visa</span>
                                    <span className="clabel">Crédit...   5234</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="credit-card-row" aria-label="Image label">
                                <span className="credit-card-img">
                                    <img src={VisaImg}></img>
                                </span>
                                <div className="credit-card-info">
                                    <span className="cname">Visa</span>
                                    <span className="clabel">Crédit...   5234</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="credit-card-row" aria-label="Image label">
                                <span className="credit-card-img">
                                    <img src={VisaImg}></img>
                                </span>
                                <div className="credit-card-info">
                                    <span className="cname">Visa</span>
                                    <span className="clabel">Crédit...   5234</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default rsdf_table;