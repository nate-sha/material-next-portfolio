import { useContext } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { SettingsContext } from "@/context/settingsContext";

const Meta = ({ title }) => {
  const { settings } = useContext(SettingsContext);
  return (
    <Head>
      <title>{`${settings.name} | ${title}`}</title>
      <meta name="description" content={settings.description} />
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
