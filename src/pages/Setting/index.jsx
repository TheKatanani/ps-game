import Site from "../../Components/SettingsComp/Site"
import General from "../../Components/SettingsComp/General"
import Security from "../../Components/SettingsComp/Security"
import Social from "../../Components/SettingsComp/Social"
import './styles.css'
function Settings(){
return(
        <div className="Setting container">
 <div className="row d-flex  align-items-center justify-content-between">
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Site/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <General/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Security/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Social/>
                </div>
        </div>
        </div>
    )
}
export default Settings;