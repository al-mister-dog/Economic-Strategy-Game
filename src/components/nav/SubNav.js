import { connect } from "react-redux";
import Department from "./Department";
import DepartmentOps from "./DeparmentOps";
import { Toolbar } from "@material-ui/core";

const darkPrimary = "#191919";

function SubNav({ department, departmentOperation }) {
  return (
    <>
      <Toolbar style={{ backgroundColor: darkPrimary }}>
        {department && <Department />}
        {departmentOperation && <DepartmentOps />}
      </Toolbar>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    department: state.department,
    departmentOperation: state.departmentOperation,
  };
};



export default connect(mapStateToProps)(SubNav);
