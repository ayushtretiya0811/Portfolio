import React from "react";
function Contact() {
  return (
    <>
      <div className="container text-center ">
        <h4 className="fw-bold p-5">Contact Me</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <form>
              <div class="row mb-4">
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label" for="form6Example1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="form6Example1"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col">
                  <div data-mdb-input-init class="form-outline">
                    <label class="form-label" for="form6Example2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="form6Example2"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example3">
                  Company name
                </label>
                <input type="text" id="form6Example3" class="form-control" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example4">
                  Address
                </label>
                <input type="text" id="form6Example4" class="form-control" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example5">
                  Email
                </label>
                <input type="email" id="form6Example5" class="form-control" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example6">
                  Phone
                </label>
                <input type="number" id="form6Example6" class="form-control" />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form6Example7">
                  Additional information
                </label>
                <textarea
                  class="form-control"
                  id="form6Example7"
                  rows="4"
                ></textarea>
              </div>

              <button type="button" class="btn btn-primary  mb-4">
                submit
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13826.725845913312!2d72.67398397839801!3d22.993700265868565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712829619486!5m2!1sen!2sin"
                width="650"
                height="610"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
     <p>
      
       hello after push
      </p>
    </>
  );
}
export default Contact;
