import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { findHash } from "../../utils/findHash";
import Switch from "../elements/Switch";
import { findStream } from "../../utils/findStream";
import TransactionTable from "./transactionTable";
import StreamTable from "./streamTable";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [hash, setHash] = useState("");
  const [placeholder, setPlaceholder] = useState("Transaction Hash");
  const [searchType, setSearchType] = useState("Transaction");
  const [renderTx, setRenderTx] = useState(false);
  const [renderStream, setRenderStream] = useState(false);
  const [tableData, setTableData] = useState(undefined);
  const [streamData, setStreamData] = useState(undefined);
  const [loadingText, setLoadingText] = useState("");
  const [error, setError] = useState("");
  const [scrollUp, setScrollUp] = useState(false);

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const handleSwitchChange = (event) => {
    setRenderTx(false);
    setRenderStream(false);
    setError("");
    if (event.target.checked) {
      setPlaceholder("Superfluid Stream ID");
      setSearchType("Stream");
    } else {
      setPlaceholder("Transaction Hash");
      setSearchType("Transaction");
    }
  };

  async function handleSearch() {
    setScrollUp(false);
    if (searchType === "Transaction") {
      setError("");
      setRenderTx(false);
      setRenderStream(false);
      setLoadingText("Searching for transaction... 🕵️‍♀️");
      const tx = await findHash(hash);
      setLoadingText("");
      if (tx === undefined) {
        setError("The simulation just went bad 🥺");
      } else {
        setTableData(tx);
        setRenderTx(true);
        setRenderStream(false);
      }
    } else {
      setError("");
      setRenderStream(false);
      setRenderTx(false);
      setLoadingText("Searching for stream... 🕵️‍♀️");
      const stream = await findStream(hash);
      setLoadingText("");
      if (stream === undefined) {
        setError("The simulation just went bad 🥺");
      } else {
        setStreamData(stream);
        setRenderStream(true);
        setRenderTx(false);
      }
    }
  }

  const scrollToTx = (ref) => {
    if (ref && setRenderTx) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToStream = (ref) => {
    if (ref && setRenderStream) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = (ref) => {
    if (ref && scrollUp) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section {...props} className={outerClasses} ref={scrollToTop}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Hash<span className="text-color-primary">Hunter 🔎</span>
            </h1>
            <div className="container-xs">
              <div
                className="cta-action reveal-from-bottom"
                data-reveal-delay="600"
              >
                <Input
                  id="txHash"
                  type="search"
                  label="txHash"
                  labelHidden
                  hasIcon="right"
                  placeholder={`Enter a ${placeholder} ex: 0x123...`}
                  onChange={(e) => setHash(e.target.value)}
                ></Input>
              </div>
              <div className="reveal-from-bottom">
                <span className="text-color-primary text-up">
                  Transaction Explorer{" "}
                </span>
                <Switch onChange={handleSwitchChange} />
                <span className="text-color-primary text-up">
                  Superfluid Explorer
                </span>
              </div>
              <br />
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={() => handleSearch()}
                  >
                    Hunt {searchType} 🔎
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <h3 className="blinking text-color-primary">{loadingText}</h3>
            <h3 className="text-color-error">{error}</h3>
            {renderTx && (
              <div ref={scrollToTx}>
                <TransactionTable tableData={tableData} />
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    onClick={() => setScrollUp(true) && scrollToTop()}
                  >
                    Go back up
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
          {renderStream && (
            <div ref={scrollToStream}>
              <StreamTable streamData={streamData} />
              <ButtonGroup>
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  onClick={() => setScrollUp(true) && scrollToTop()}
                >
                  Go back up
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
