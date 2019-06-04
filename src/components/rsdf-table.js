import React from 'react';
import { Menu, MenuList, MenuItem, Button, Table, Popover, Image } from 'fundamental-react';


const rsdf_table = (props) => {
    return (
        <div className="table-content">
            <Table
                headers={['Data', 'Destinatário', 'Tipo', 'Valor']}
                tableData={[
                    {
                        rowData: [
                            <span class="table-item ti-date">30/05/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Microsoft Payments
                                </a>,
                            <span class="table-item ti-grey">Pagamento</span>,
                            <span class="table-item ti-value">- €15,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">20/02/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Ebay
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €25,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">2/01/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Nike.com
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €89,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">30/05/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Microsoft Payments
                                </a>,
                            <span class="table-item ti-grey">Pagamento</span>,
                            <span class="table-item ti-value">- €15,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">20/02/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Ebay
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €25,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">2/01/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Nike.com
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €89,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">30/05/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Microsoft Payments
                                </a>,
                            <span class="table-item ti-grey">Pagamento</span>,
                            <span class="table-item ti-value">- €15,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">20/02/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Ebay
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €25,83</span>
                        ]
                    },
                    {
                        rowData: [
                            <span class="table-item ti-date">2/01/2019</span>,
                            <a href="#" className="fd-has-font-weight-semi">
                                Nike.com
                                </a>,
                            <span class="table-item ti-grey">Compra</span>,
                            <span class="table-item ti-value">- €89,83</span>
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default rsdf_table;