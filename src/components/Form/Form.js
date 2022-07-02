import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';









 class Form extends Component {
state={
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}

//handle inputs
handleName=(e)=>{
    this.setState({name:e.target.value
})


}


handleLastname=(e)=>{
    this.setState({lastname:e.target.value
})


}


handleEmail=(e)=>{
    this.setState({email:e.target.value
})


}


handleMessage=(e)=>{
    this.setState({message:e.target.value
})


}



//end of handle inputs

formSubmit=(e)=>{
  e.preventDefault();
  let data ={
    name:this.state.name,
    lastname:this.state.lastname,
    email:this.state.email,
    message:this.state.message
  }  

  axios.post('/api/forma',data)
  .then(res=>{this.setState({
    sent:true,
  }
  ,this.resetForm())

}).catch(()=>{
   console.log('message not sent'); 
})
}

//for reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}


  render() {
    return (
      <div className='container'>
        <form>
        {/* Single İtem*/}
            <div className='singleİtem'>
                <label htmlFor='İsim'>Ad</label>
                <input type="text"
                 name="name"
                   className='name'
                    placeholder='Adınız...'
                     value={this.state.name} 
                     onChange={this.handleName}  
                    />
            </div>
            {/*en of Single İtem*/}

             {/* Single İtem*/}
             <div className='singleİtem'>
                <label htmlFor='Soyad'>Soyad</label>
                <input type="text"
                 name="lastname" 
                  className='lastname'
                   placeholder='Soyadınız...'
                    value={this.state.lastname}
                    onChange={this.handleLastname}
                   />
            </div>
            {/*en of Single İtem*/}

             {/* Single İtem*/}
             <div className='singleİtem'>
                <label htmlFor='email'>Email</label>
                <input type="text"
                 name="email" 
                  className='email'
                   placeholder='Mail Adresiniz...'
                   value={this.state.email}
                    onChange={this.handleEmail}
                   />
            </div>
            {/*en of Single İtem*/}

             {/* Single İtem*/}
             <div className="textArea singleİtem">
             <label htmlFor='message'>Mesajınız</label>
                <textarea name="message"
                 id="" cols="30" rows="5" 
                 placeholder='Mesajınız...'
                 value={this.state.message}
                    onChange={this.handleMessage}
                 
                 ></textarea>
             </div>
            {/*en of Single İtem*/}
            <div className={this.state.sent ?' msg msgAppear':'msg'}>Mesajınız Gönderilmiştir.</div>
            <div className='btn'>
                <button type="submit" >GÖNDER</button>
            </div>
        </form>
      </div>
    )
  }
}
export default Form;