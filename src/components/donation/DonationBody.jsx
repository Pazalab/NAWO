import DonationForm from "./DonationForm"

const DonationBody = () => {
  return (
    <div className="donation-body">
              <div className="inner-row">
                          <div className="donation-body-content">
                                     <h3>Your generosity has the power to change lives. Every contribution, big or small, helps us bring hope, provide essential resources, and create opportunities for those in need. Join us in building a brighter future—your donation can spark lasting impact.</h3>

                                     <DonationForm />
                          </div>
              </div>
    </div>
  )
}

export default DonationBody