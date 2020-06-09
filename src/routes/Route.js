import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    // Route is proveate and the user is not logged in
    if (isPrivate && !signed) {
        return <Redirect to="/" />
    }

    // Route is publice and the user is logged in
    if (!isPrivate && signed) {
        return <Redirect to="/dashboard" />
    }
    return <Route {...rest} component={Component} />
};

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.propTypes = {
    isPrivate: false
};