import React from 'react';
import RSDF_Panel from '../components/rsdf-panel.js';
import RSDF_Table from '../components/rsdf-table.js';


const dashboard = (props) => {
    return (
        <div>
            {/* Grid Section*/}
            <section className="fd-section">
                    <RSDF_Table></RSDF_Table>

                </section>


        </div>
    )
}

export default dashboard;