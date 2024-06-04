import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Card from './Card';
import SortingMenu from './SortingMenu';
import SearchingMenu from './SearchingMenu';

export default function CardList({ darkmode }) {
    const [sortOption, setSortOption] = useState('abc');
    const [searchCard, setSearchCard] = useState('')

    const data = [
        { id: '0', title: 'Dajsonekk Web', description: 'https://dajsonekk-web.netlify.app', updated: 'Mar 17, 2024', color: '#a577ff', largeDescription: "Browse Dajsonekk's blogs, visit the YouTube channel, and choose from the available services on the website. In case of any problems, use the Contact tab and write an e-mail :> You can also subscribe to the newsletter to stay up to date with new products and promotions! We also plan to add game and website hosting, stay tuned" },
        { id: '1', title: 'Better Modpacks', description: 'https://bettermodpacks.netlify.app/', updated: 'Feb 15, 2024', color: '#335cff', largeDescription: "Are you looking for innovative modpacks for Minecraft for the latest versions that will introduce a lot of interesting functionalities and Quality Of Life changes that will only improve what is already there? You've come to the right place! Better Modpacks is a place where he publishes his own modpacks, which are also very well optimized, so that even those who do not have the most expensive computer equipment can benefit from better Minecraft!" },
        { id: '2', title: 'CodeAdiksuuWeb', description: 'https://codeadiksuuweb.netlify.app', updated: 'Jan 5, 2024', color: '#1da1e8', largeDescription: "This is, as the name says, my website, the website of the person who is also behind the mobile application you are currently viewing, it was created so that you can find all my projects there, find out what I am interested in, where I am from, what technologies I use and a lot more" },
        { id: '3', title: 'Nexus Hub', description: 'https://nexus-hub.netlify.app', updated: 'Jan 5, 2024', color: '#ff914d', largeDescription: "Welcome to the best marketplace for software development services. Our company offers a wide range of programming services, including software development, website design and much more. We are an experienced team of programmers who provide high-quality code, fast project implementation and competitive prices. Contact us today to learn more!" },
        { id: '4', title: 'Nexus Hub Videos', description: 'https://nexus-videos.netlify.app/', updated: 'Dec 30, 2023', color: '#ff914d', largeDescription: "Step into NEXUS, the pinnacle of video streaming, where a boundless array of entertainment awaits. Here, immerse yourself in a universe of diverse content, spanning from riveting blockbusters to enlightening educational documentaries and beyond. With NEXUS, the possibilities are limitless, and the journey through captivating visuals and enriching knowledge knows no bounds. Welcome to a realm where every click unveils a new adventure, every selection sparks curiosity, and every moment is a testament to the power of video to inspire, educate, and entertain." },
        { id: '5', title: 'Nexus Hub Chat', description: 'https://nexus-hub-chat.netlify.app', updated: 'Dec 25, 2023', color: '#ff914d', largeDescription: "It is an online chat based on the already popular Messenger instant messenger, and in the future I want to reactivate this project to reach a larger group of interested people. At the moment the project is on hold. Still, you can enter it, register, invite friends and write with them and send memes" },
        { id: '6', title: 'MC Latest News', description: 'https://mclatestnews.netlify.app', updated: 'Jun 14, 2023', color: '#a8567b', largeDescription: "A place where we add information about any major changes with each full Minecraft update, so that people who don't watch snapshot review videos can find out what's been introduced in that update" },
    ];

    const sortedData = [...data].sort((a, b) => {
        if (sortOption === 'abc') {
            return a.title.localeCompare(b.title);
        }
    });

    return (
        <View style={styles.container}>
            <SearchingMenu searchCard={searchCard} setSearchCard={setSearchCard} darkmode={darkmode} />
            <SortingMenu sortOption={sortOption} setSortOption={setSortOption} darkmode={darkmode} />
            {sortedData.filter(item => item.title.toLocaleLowerCase().includes(searchCard.toLowerCase().trim())).map((item, i) => (
                <Card item={item} key={i} darkmode={darkmode} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
});