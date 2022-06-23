import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    ScrollView,
    FlatList,
    Image,
} from 'react-native';
// import Svg, { Line, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useAppContext } from '../App.provider';
import { theme } from '../Theme';
import { StyleList } from '../components/StyleList';
import { CategoriesDisplay } from '../components/CategoriesDisplay';
import { BestPicksDisplay } from '../components/BestPicksDisplay';
type HomeProps = {
    navigation: any;
};

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    const appContext = useAppContext();
    const CategoriesList = appContext.categories;
    const ProductsList = appContext.products;
    const [search, setSearch] = useState('');
    return (
        <View style={styles.conatiner}>
            <View style={{ flex: 1.5 }}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 1.0, y: 1.0 }}
                    colors={[
                        theme.color1.color,
                        theme.color2.color,
                        theme.color3.color,
                    ]}
                    style={styles.header}>
                    <View style={styles.searchHeader}>
                        <View style={styles.searchContainer}>
                            <Pressable
                                onPress={() => {
                                    navigation.openDrawer();
                                }}>
                                <Image
                                    source={{
                                        uri: 'https://icon-library.com/images/free-hamburger-menu-icon/free-hamburger-menu-icon-12.jpg',
                                    }}
                                    style={styles.menuIcon}
                                />
                            </Pressable>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={text => {
                                    setSearch(text);
                                }}
                                placeholder="I'm Looking for"
                                placeholderTextColor={'rgba(0,0,0,0.5)'}
                            />
                        </View>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Cart');
                            }}>
                            <Image
                                source={{
                                    uri: 'https://www.iconsdb.com/icons/preview/white/shopping-basket-xxl.png',
                                }}
                                style={styles.cartIcon}
                            />
                        </Pressable>
                    </View>
                    <View style={styles.chooseStyle}>
                        <Text style={[theme.white, theme.bold]}>
                            Choose Style
                        </Text>
                        <StyleList />
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.promotionContainer}>
                <Text style={[theme.bold, theme.gray, styles.promoTitle]}>
                    Promo dan Event
                </Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[
                            theme.color1.color,
                            theme.color2.color,
                            theme.color3.color,
                        ]}
                        style={styles.promo1}>
                        <View style={styles.promo1text}>
                            <Text style={[theme.bold, theme.white]}>
                                See All
                            </Text>
                            <Text style={[theme.bold, theme.white]}>
                                Promos
                            </Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[
                            theme.color1.color,
                            theme.color2.color,
                            theme.color3.color,
                        ]}
                        style={styles.promo2}>
                        <View style={styles.promo1text}>
                            <Text style={[theme.bold, theme.white]}>
                                See All
                            </Text>
                            <Text style={[theme.bold, theme.white]}>
                                Promos
                            </Text>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[
                            theme.color1.color,
                            theme.color2.color,
                            theme.color3.color,
                        ]}
                        style={styles.promo2}>
                        <View style={styles.promo1text}>
                            <Text style={[theme.bold, theme.white]}>
                                See All
                            </Text>
                            <Text style={[theme.bold, theme.white]}>
                                Promos
                            </Text>
                        </View>
                    </LinearGradient>
                </ScrollView>
            </View>
            <View style={styles.categoriesContainer}>
                <View style={styles.categoriesHeading}>
                    <Text style={[theme.bold, theme.gray]}>Categories</Text>
                    <Text style={[theme.color1]}>See All</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={CategoriesList}
                        numColumns={Math.ceil(CategoriesList.length / 2)}
                        renderItem={({ item }) => (
                            <CategoriesDisplay data={item} />
                        )}
                        keyExtractor={item => item.name}
                        key={item => item.name}
                        // horizontal={true}
                    />
                </ScrollView>
            </View>
            <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={[
                    theme.color1.color,
                    theme.color2.color,
                    theme.color3.color,
                ]}
                style={styles.bestPicksContainer}>
                <View style={styles.bestPicksHeading}>
                    <Text style={[theme.bold, theme.white]}>
                        Best Picks For You
                    </Text>
                    <Text style={[theme.white]}>See All</Text>
                </View>
                <FlatList
                    data={ProductsList}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('ProductDetail', {
                                    product: item,
                                });
                            }}>
                            <BestPicksDisplay data={item} />
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </LinearGradient>
        </View>
    );
};
// create a style sheet
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
    },
    header: {
        backgroundColor: 'lightblue',
        height: 150,
    },
    searchHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchInput: {
        width: '90%',
        height: 40,
        padding: 10,
        borderRadius: 5,
        color: 'gray',
    },
    searchContainer: {
        flex: 0.95,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        // padding: 10,
    },
    cartIcon: {
        width: 30,
        height: 30,
    },
    menuIcon: {
        alignSelf: 'center',
        marginLeft: 5,
        width: 30,
        height: 30,
    },
    chooseStyle: {
        width: '100%',
        padding: 10,
    },
    styleList: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    promotionContainer: {
        flex: 1.2,
        // borderWidth: 1,
        paddingHorizontal: 10,
    },
    promoTitle: {
        marginBottom: 5,
        fontSize: 18,
    },
    promo1: {
        borderRadius: 10,
        width: 120,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 5,
    },
    promo1text: {
        margin: 10,
    },
    promo2: {
        borderRadius: 10,
        width: 220,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: 5,
    },
    categoriesContainer: {
        flex: 1.2,
        // borderWidth: 1,
        paddingHorizontal: 10,
    },
    categoriesHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
    },
    bestPicksContainer: {
        flex: 1.7,
        padding: 10,
    },
    bestPicksHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
