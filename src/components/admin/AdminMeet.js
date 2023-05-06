import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

const AdminMeet = () => {
  const client = ZoomMtgEmbedded.createClient();

  var authEndpoint = ''
  var sdkKey = ''
  var meetingNumber = '123456789'
  var passWord = ''
  var role = 0
  var userName = 'React'
  var userEmail = ''
  var registrantToken = ''
  var zakToken = ''
  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    }).then(res => res.json())
    .then(response => {
      startMeeting(response.signature)
    }).catch(error => {
      console.error(error)
    })
  }

  function startMeeting(signature) {

    let meetingSDKElement = document.getElementById('meetingSDKElement');

    client.init({
      debug: true,
      zoomAppRoot: meetingSDKElement,
      language: 'en-US',
      customize: {
        meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
        toolbar: {
          buttons: [
            {
              text: 'Custom Button',
              className: 'CustomButton',
              onClick: () => {
                console.log('custom button');
              }
            }
          ]
        }
      }
    });

    client.join({
      signature: signature,
    	sdkKey: sdkKey,
    	meetingNumber: meetingNumber,
    	password: passWord,
    	userName: userName,
      userEmail: userEmail,
      tk: registrantToken,
      zak: zakToken
    })
  }
    return(
     <div>
        
    
    <div id="meetingSDKElement">
        {/* <!-- Zoom Meeting SDK Rendered Here --> */}
      </div>
      
      <button className="btn bg-dark text-light" onClick={getSignature}>Join Meeting</button>
    </div>
    )
}

export default AdminMeet;