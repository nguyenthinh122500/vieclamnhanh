import React from 'react'

export default function Sidebar() {
  return (
    <div className="col-lg-3 mb-2-2 mb-lg-0">
                  <div className="dashboard-left-sidebar">
                    <h3 className="bg-primary text-white collapse-sm m-0 h5 px-3 py-3 font-weight-600 d-block d-lg-none">
                      Dashboard
                    </h3>
                    <ul className="dashboard-list dashboard-menu">
                      <li className="active">
                        <a href="employer-dashboard.html">
                          <i className="ti-home" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="employer-company-profile.html">
                          <i className="ti-user" />
                          Company Profile
                        </a>
                      </li>
                      <li>
                        <a href="employer-post-job.html">
                          <i className="ti-ruler-pencil" />
                          Post New Job
                        </a>
                      </li>
                      <li>
                        <a href="employer-manage-job.html">
                          <i className="ti-briefcase" /> Manage Jobs{" "}
                        </a>
                      </li>
                      <li>
                        <a href="employer-applicants.html">
                          <i className="ti-file" /> All Applicants
                        </a>
                      </li>
                      <li>
                        <a href="employer-shortlisted-resumes.html">
                          <i className="ti-bookmark" />
                          Shortlisted Resumes
                        </a>
                      </li>
                      <li>
                        <a href="employer-packages.html">
                          <i className="ti-notepad" />
                          Packages
                        </a>
                      </li>
                      <li>
                        <a href="employer-messages.html">
                          <i className="ti-comment-alt" />
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="employer-resume-alerts.html">
                          <i className="ti-bell" />
                          Resume Alerts
                        </a>
                      </li>
                      <li>
                        <a href="employer-change-password.html">
                          <i className="ti-lock" />
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="ti-power-off" />
                          Logout
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i className="ti-trash" />
                          Delete Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
  )
}
