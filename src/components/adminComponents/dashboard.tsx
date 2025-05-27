
//========== DASHBOARD COMPONENT ==========//

'use client';

import Image from "next/image";
import '../../styles/stylesHome/main.scss'

export default function Dashboard() {
    return (
        <section className="admin">

            {/* dashboard header */}
            <header>
                <h2>
                    <span className="golden-a">A</span>
                    ethra
                </h2>
            </header>

            {/* dashboard grid */}
            <div className="dashboard-container">

                {/* dashboard card */}
                <div className="dashboard-card">
                    <h3>Total User</h3>
                    <div className="inner-dashboard-card">
                        <Image 
                            src='/images/adminAssets/total-users.svg'
                            alt='total user'
                            width={40}
                            height={40}
                        />
                        <p>UNKNOWN</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>Active Order</h3>
                    <div className="inner-dashboard-card">
                        <Image 
                            src='/images/adminAssets/order.svg'
                            alt='total user'
                            width={40}
                            height={40}
                        />
                        <p>UNKNOWN</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>Revenue</h3>
                    <div className="inner-dashboard-card">
                        <Image 
                            src='/images/adminAssets/revenue.svg'
                            alt='total user'
                            width={40}
                            height={40}
                        />
                        <p>UNKNOWN</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <h3>Completed</h3>
                    <div className="inner-dashboard-card">
                        <Image 
                            src='/images/adminAssets/checklist.svg'
                            alt='total user'
                            width={40}
                            height={40}
                        />
                        <p>UNKNOWN</p>
                    </div>
                </div>

            </div>

        </section>
    )
}