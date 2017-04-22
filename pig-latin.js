return message.split(" ").forEach(w => "aeiou".contains(w[0]) ? w.substr(1) + w[0] + "ay" : w + "ay").join(" ");
