function Fifthpage() {
  return (
    <div>
      <section className="container5" id="contact">
        <p className="title6">Let's Talk</p>
        <p className="title-name">Name</p>
        <input className="input-field1" placeholder="Your name"></input>
        <p className="title-mail">Email</p>
        <input className="input-field2" placeholder="Your email adress"></input>
        <p className="title-message">Message</p>
        <textarea
          className="input-field3"
          rows="3"
          placeholder="Enter your message"
        ></textarea>
        <button class="submit-btn">Submit</button>
        <div className="card5">
          <h1 className="foto">FOTO</h1>
        </div>
      </section>
    </div>
  );
}

export default Fifthpage;
