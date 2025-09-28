import React from 'react';

const dashboard = () => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          background: '#0d1117',
          position: 'relative',
        }}
      >
        <nav
          className="navbar navbar-dark"
          style={{ background: '#161b22', minHeight: '60px' }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand fw-bold text-info" href="#">
              💳 MyWallet
            </a>

            <div className="dropdown">
              <button
                className="btn btn-dark d-flex align-items-center dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: 'none' }}
              >
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <span className="fw-bold d-none d-sm-inline">Anthony</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow">
                <li>
                  <a className="dropdown-item" href="sd">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container p-4 text-light">
          <h2 className="fw-bold text-info mb-4">Wallet Dashboard</h2>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <button className="btn btn-info text-dark fw-bold">
              Dashboard
            </button>
            <button className="btn btn-outline-info">Transactions</button>
            <button className="btn btn-outline-info">Send Money</button>
            <button className="btn btn-outline-info">Settings</button>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card bg-dark text-light shadow border-0 text-center">
                <div className="card-body">
                  <h6 className="fw-semibold" style={{ color: '#94a3b8' }}>
                    Total Balance
                  </h6>
                  <h3 className="fw-bold text-success">₦250,000.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card bg-dark text-light shadow border-0 text-center">
                <div className="card-body">
                  <h6 className="fw-semibold" style={{ color: '#94a3b8' }}>
                    Income
                  </h6>
                  <h3 className="fw-bold text-primary">₦75,000.00</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="card bg-dark text-light shadow border-0 text-center">
                <div className="card-body">
                  <h6 className="fw-semibold" style={{ color: '#94a3b8' }}>
                    Expenses
                  </h6>
                  <h3 className="fw-bold text-danger">₦20,000.00</h3>
                </div>
              </div>
            </div>
          </div>

          <h5 className="mb-3 text-info">Recent Transactions</h5>
          <div className="d-flex flex-column gap-3">
            <div className="card bg-dark text-light shadow border-0">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Salary Payment</h6>
                  <small className="text-muted">09 Sep 2025</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-success mb-1">Credit</span>
                  <h6 className="fw-bold text-success mb-0">+₦75,000</h6>
                </div>
              </div>
            </div>

            <div className="card bg-dark text-light shadow border-0">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Electricity Bill</h6>
                  <small className="text-muted">07 Sep 2025</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-danger mb-1">Debit</span>
                  <h6 className="fw-bold text-danger mb-0">-₦10,000</h6>
                </div>
              </div>
            </div>

            <div className="card bg-dark text-light shadow border-0">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Food Delivery</h6>
                  <small className="text-muted">06 Sep 2025</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-danger mb-1">Debit</span>
                  <h6 className="fw-bold text-danger mb-0">-₦5,000</h6>
                </div>
              </div>
            </div>

            <div className="card bg-dark text-light shadow border-0">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1 fw-bold">Money Transfer</h6>
                  <small className="text-muted">04 Sep 2025</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-success mb-1">Credit</span>
                  <h6 className="fw-bold text-success mb-0">+₦20,000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-info text-dark rounded-circle shadow-lg"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default dashboard;
