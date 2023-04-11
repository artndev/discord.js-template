const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonBuilder, ButtonStyle } = require("discord.js");


module.exports = {
    qRow: (url) => {
        return new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                    .setCustomId("refresh")
                    .setLabel("Refresh")
                    .setStyle(ButtonStyle.Success)
                    .setEmoji("🔃"),
                new ButtonBuilder()
                    .setLabel("Inspect")
                    .setStyle(ButtonStyle.Link)
                    .setEmoji("🔢")
                    .setURL(url)
        )
    },
    qbadRow: () => {
        return new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                    .setCustomId("refresh")
                    .setLabel("Refresh")
                    .setStyle(ButtonStyle.Success)
                    .setEmoji("🔃"),
        )
    },
}