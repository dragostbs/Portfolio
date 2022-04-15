function Fifthpage() {
  return (
    <div>
      <section className="container5" id="contact">
        <div className="container44">
          <div className="title6">
            <p>Let's Talk</p>
          </div>
          <div className="title-name">
            <p>Name</p>
            <input className="input-field1" placeholder="Your name"></input>
          </div>
          <div className="title-mail">
            <p className="title-mail">Email</p>
            <input
              className="input-field2"
              placeholder="Your email adress"
            ></input>
          </div>
          <div className="title-message">
            <p>Message</p>
            <textarea
              className="input-field3"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button class="submit-btn">Submit</button>
          </div>
        </div>
        <div className="card5">
          <h1 className="foto">FOTO</h1>
        </div>
      </section>
    </div>
  );
}

export default Fifthpage;
