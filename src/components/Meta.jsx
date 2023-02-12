import { useContext } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { AppContext } from "@/context/AppContext";

const Meta = ({ title }) => {
  const { state } = useContext(AppContext);
  const { name, description } = state.global;
  return (
    <Head>
      <title>{`${name} | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE,
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
