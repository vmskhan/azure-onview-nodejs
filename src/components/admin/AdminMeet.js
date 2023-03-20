const { default: AdminHeader } = require("./AdminHeader")

const AdminMeet = () => {
    return(
     <div>
        <AdminHeader/>
    
    <div id="meetingSDKElement">
        {/* <!-- Zoom Meeting SDK Rendered Here --> */}
      </div>
      

    <script src="https://source.zoom.us/2.3.5/lib/vendor/react.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/react-dom.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux-thunk.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/lodash.min.js"></script>
    
    <script src="https://source.zoom.us/2.3.5/zoom-meeting-embedded-2.3.5.min.js"></script>
    <script src="../joinAdmin.js"></script>

    </div>
    )
}

export default AdminMeet;