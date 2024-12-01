import  React, { useState } from "react"
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetpassword, setResetPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    console.log("submit")   
    if (!email || !resetpassword || ! password) {
      setError('Please fill in all fields');
      return;
    }else if (resetpassword !== password) {
      setError('The password does not match');
      return;
    } 
    else {
      console.log("Succesfully")
      alert('Login successful');
    }
  }
  return (
    <div style={{ display: "flex" }}>
    <aside className="sidebar-aside">
              <div className="sidebarIte">
                <i className="fa-solid fa-chart-simple"></i> HRdream
              </div>
              <div className="sidebarItemD">
              <h1>Plan includes</h1>
              </div>
              <div className="sidebarItemD">
             <input type="checkbox"/> Unlimited employee uploads
            </div>
            <div className="sidebarItemD">
               <input type="checkbox" />  Free forever
              </div>
              <div className="sidebarItemD">
              <input type="checkbox" /> Full author permissions
              </div>
              <div className="sidebarItemD">
              <input type="checkbox" />  Pro tips
              </div>
    </aside>        
      
    <div className="side">
    <div className='logi'>
    <a href="/sign" className='login'>Already a member? <span className=''>Log in.</span></a>
  </div>

  <div className='main1'>
    <h1>Sign up</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onClick={handleSubmit} >
      <h4 className=''>Sign up with an already existing account</h4>
      <div>
      <button className='btn2'><i class="fa fa-google" aria-hidden="true"></i>Google</button>
      <button className='btn2'><i className="fa-solid fa-chart-simple"></i>Apple</button>
      </div>
      <h4 className=''>Or sign up with your email address</h4>
      <div className=''>
       <input type="email" placeholder='Email address' className='inp1' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className=''>
        <input type="password" placeholder='Password' className='inp1' value={ password} onChange={(e) => setPassword(e.target.value)}  />
      </div>
      <div className=''>
      <input type="password" placeholder='Repeat Password' className='inp1' value={ resetpassword} onChange={(e) => setResetPassword(e.target.value)}  />
    </div>
      <div className='inp1'>
        <button className='btn1'>Create an account</button>
      </div>
      <p className='signp'>This site is protected by reCAPTCHA and the Google privacy policy.</p>
      </form>
    </div>
    </div>
    </div>
  )
}
export default SignUp