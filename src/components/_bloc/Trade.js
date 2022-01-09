import { connect } from "react-redux";
import BlocMapChart from "../__reusable/maps/components/BlocMapChart";
function Trade({ countries }) {
  const blocs = [
    { name: "EEA", color: "#e6194B" },
    { name: "NAFTA", color: "#f032e6" },
    { name: "MERCOSUR", color: "#ffe119" },
    { name: "AEC", color: "#4363d8" },
    { name: "COMESA", color: "#f58231" },
    { name: "APEC", color: "#911eb4" },
    { name: "SARC", color: "#42d4f4" },
    { name: "IORA", color: "#3cb44b" },
    { name: "LAIA", color: "#bfef45" },
    { name: "SADC", color: "#fabed4" },
  ];
  return <BlocMapChart blocs={blocs} countries={countries} />;
}
const mapStateToProps = (state) => {
  return {
    countries: state.countriesData,
  };
};
export default connect(mapStateToProps)(Trade);
