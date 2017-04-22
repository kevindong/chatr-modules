return Promise.resolve(message.split(" ").map((w) => ("aeiou".indexOf(w[0]) !== -1) ? w.substr(1) + w[0] + "ay" : w + "ay").join(" "));
