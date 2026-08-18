import React from 'react';
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  View,
} from 'react-native';

import AppContainer from '../layout/AppContainer';
import ScreenHeader from './ScreenHeader';
import Loader from '../feedback/Loader';
import ErrorState from '../feedback/ErrorState';
import EmptyState from '../feedback/EmptyState';

export default function PageLayout({

    title,

    subtitle,

    children,

    loading = false,

    error = null,

    empty = false,

    emptyTitle = "Nothing here yet.",

    emptyDescription = "",

    onRefresh,

    refreshing = false,

    showBack = true,

    rightComponent,

}) {

    if (loading) {
        return (
            <AppContainer>
                <Loader />
            </AppContainer>
        );
    }

    if (error) {
        return (
            <AppContainer>
                <ErrorState
                    message={error}
                    onRetry={onRefresh}
                />
            </AppContainer>
        );
    }

    if (empty) {
        return (
            <AppContainer>

                <ScreenHeader
                    title={title}
                    subtitle={subtitle}
                    showBack={showBack}
                    rightComponent={rightComponent}
                />

                <EmptyState
                    title={emptyTitle}
                    description={emptyDescription}
                />

            </AppContainer>
        );
    }

    return (

        <AppContainer>

            <ScrollView

                showsVerticalScrollIndicator={false}

                refreshControl={

                    onRefresh ?

                    <RefreshControl

                        refreshing={refreshing}

                        onRefresh={onRefresh}

                    />

                    : null

                }

                contentContainerStyle={styles.container}

            >

                <ScreenHeader

                    title={title}

                    subtitle={subtitle}

                    showBack={showBack}

                    rightComponent={rightComponent}

                />

                {children}

            </ScrollView>

        </AppContainer>

    );

}

const styles = StyleSheet.create({

    container:{

        padding:20,

        paddingBottom:40,

        flexGrow:1,

    },

});