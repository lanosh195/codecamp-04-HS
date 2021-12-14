import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const ProductDetailUI = () => {
  return <MarketDetail />;
};

export default withAuth(ProductDetailUI);
