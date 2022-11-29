import { Circles } from "react-loader-spinner";
import { OpacityBg, SpinnerContainer } from "./styles";

interface LoadingProps {
  isLoading: boolean;
}

const LoadingBackground: React.FC<LoadingProps> = ({ isLoading }) => {
  const spinnerData = {
    Component: Circles,
    props: {
      color: "#FF9B25",
      height: 100,
      width: 110,
    },
    name: "Ball Triangle",
  };

  return (
    <OpacityBg isOpen={!isLoading}>
      <SpinnerContainer>
        <div key={spinnerData.name} className="loaderBox">
          <spinnerData.Component {...spinnerData.props} />
          <span>Loading...</span>
        </div>
      </SpinnerContainer>
    </OpacityBg>
  );
};

export default LoadingBackground;
