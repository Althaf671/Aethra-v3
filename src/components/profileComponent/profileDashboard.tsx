import LogoutBtn from "@/app/client/profile/logout-btn";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from "next/link";

export default async function ProfileDashboard() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    if (!isAuthenticated || !user) {
        return (
            <section className="profile__dashboard">
                <h1 className="profile__title">Please login to view your profile.</h1>
            </section>
        );
    }

    return (
        <section className="profile__dashboard">
            <div className="profile__header">
                <h1 className="profile__title">Welcome, {user.given_name}!</h1>
                <p className="profile__subtitle">Manage your personal information and view your order history.</p>
            </div>

            <div className="profile__card">
                <h2 className="section__title">Personal Information</h2>
                <div className="profile__info">
                    <div className="profile__info-item">
                        <span className="label">Full Name:</span>
                        <span>{user.given_name} {user.family_name}</span>
                    </div>
                    <div className="profile__info-item">
                        <span className="label">Email:</span>
                        <span>{user.email}</span>
                    </div>
                </div>
            </div>

            <div className="profile__card">
                <h2 className="section__title">Selected Orders</h2>
                <div className="profile__table-wrapper">
                    <table className="profile__table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Order list will go here */}
                            <tr>
                                <td colSpan={4} className="empty-row">No orders found.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="profile__logout">
                <Link href='/'>Return</Link>
                <LogoutBtn />
            </div>
        </section>
    );
}